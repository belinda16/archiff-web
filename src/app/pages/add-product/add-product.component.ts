import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { NavigationBackComponentComponent } from "../../components/navigation-back-component/navigation-back-component.component";
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProductService } from '../../services/products/products.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderComponent } from "../../components/loader/loader.component";
import { CommonModule } from '@angular/common';
import { statusCodes } from '../../constants/status-codes';

export interface DynamicField {
  name: string;
  type: 'string' | 'number' | 'boolean';
}
export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  dynamicFields: DynamicField[];
  productTypes: string[];
  createdAt: string;
}

@Component({
  selector: 'app-add-product',
  imports: [NavigationBackComponentComponent, SelectModule,CommonModule, ToastModule, ReactiveFormsModule, LoaderComponent],
  providers:[MessageService],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('dropzone') dropZone!: ElementRef<HTMLDivElement>;
  loading = false;
  @Input() categories: Category[] = [];
  selectedCategory?: Category;
  dynamicForm!: FormGroup;

  messageService = inject(MessageService);
  productService = inject(ProductService);
  productImageFiles:File[] = [];
  productImageUrls:string[] = [];
  productFormBuilder = new FormBuilder();
  productFormGroup = this.productFormBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      price:[0,[Validators.required]],
      quantity:[0,[Validators.required]],
  });
  isPromoCode = false;
  dynamicFormBuilder = new FormBuilder();
  productType:string[] = [];
  selectProductType: any;
  async ngOnInit(){
    this.categories = await this.productService.getCategories();
  }
  onCategorySelect(e:SelectChangeEvent) {
    this.selectedCategory = e.value as Category;
    this.buildForm(this.selectedCategory.dynamicFields);
    this.productType = this.selectedCategory.productTypes;
  }
onProductTypeSelect(e:SelectChangeEvent){
  this.selectProductType = e.value;
}
  private buildForm(fields: Category['dynamicFields']) {
    const group: { [key: string]: any } = {};
    fields.forEach(field => {
      switch (field.type) {
        case 'string':
          group[field.name] = ['', Validators.required];
          break;
        case 'number':
          group[field.name] = [0, Validators.required];
          break;
        case 'boolean':
          group[field.name] = [false];
          break;
      }
    });
    this.dynamicForm = this.dynamicFormBuilder.group(group);
  }
  togglePromo(){
    this.isPromoCode = !this.isPromoCode;
  }
  uploadImages(){
    this.productImageFiles
  }
  async publishProduct(){
    try{
      
      this.loading = true;
      const responses = await this.productService.uploadImages(this.productImageFiles);
      const imageUrls = responses.map(response=>response.data.imageUrl);
      const dynamicFields:Category["dynamicFields"] = this.selectedCategory!.dynamicFields;
      const dynamicValues = dynamicFields.reduce((acc, field) => {
        acc[field.name] = this.dynamicForm.get(field.name)?.value;
        return acc;
      }, {} as { [key: string]: any });

      console.log(imageUrls);
      const product = {
          title: this.productFormGroup.value.title!,
          description: this.productFormGroup.value.description!,
          price: this.productFormGroup.value.price!,
          quantity:this.productFormGroup.value.quantity! ,
          categoryId: this.selectedCategory?.id!,
          productType: this.selectProductType!,
          dynamicValues,
          images: imageUrls.map(image=>{return{imageUrl:image}})
      }
      const response = await this.productService.addProduct(product);
      if(response.status === statusCodes.CREATED){
        this.messageService.add({
          severity: 'success',
          summary: 'Product Added',
          detail: 'Product successfully added.',
          life: 7000
      });
      }
    }catch(error){
      console.log(error);
    }finally{
      this.loading = false;
    }
  }
 
  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'copy'; 
}
  onDrop(event: DragEvent) {
    console.log('drop');
      event.stopPropagation();
      event.preventDefault();
      const files = event.dataTransfer?.files
      if (event.dataTransfer?.files) {
          const validFiles = Array.from(files!).filter(file =>
              file.type .startsWith('image/')
          );
          if (validFiles.length > 0) {
              const file = validFiles[0];
              this.handleFile(file);
          } else {
              this.messageService.add({
                  severity: 'error',
                  summary: 'Invalid File Type',
                  detail: 'Please upload only image files.',
                  life: 5000
              });
          }
      }
  }
  onFileSelected(event:Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input!.files[0];
        this.handleFile(file);
    }
  }
  openFile(){
    this.fileInputRef.nativeElement.click();
  }
  handleFile(file:File){
    this.productImageFiles.push(file);
    this.productImageUrls.push(URL.createObjectURL(file));
  }
  removeImage(event:MouseEvent){
    const target = event.currentTarget as HTMLButtonElement;
    const imageUrl = target.getAttribute("data-imageUrl");
    const index = this.productImageUrls.indexOf(imageUrl!);
    if (index !== -1) {
      this.productImageUrls.splice(index, 1);
      this.productImageFiles.splice(index, 1);
    }
  }
}
