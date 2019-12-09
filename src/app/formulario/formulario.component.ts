import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) { }

  //CK EDITOR
  public Editor = ClassicEditor;


  //MODAL
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  //VALIDATOR DO FORMULARIO
  formulario: FormGroup;
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      chapeu: [null, [Validators.required, Validators.maxLength(50)]],
      titulonoticia: [null, [Validators.required, Validators.maxLength(180)]],
      subTitulonoticia: [null, [Validators.required, Validators.maxLength(180)]],
      textonoticia: [null, Validators.required],
      fonte: [null, Validators.maxLength(50)]
    });
  }
  onSubmit() {
    console.log(this.formulario);
  }
  verificaValid(campo) {
    let formCampo = this.formulario.get(campo);
    return !formCampo.valid && formCampo.touched;
  }
  verificaLength(campo) {
    let formCampo = this.formulario.get(campo);
    if (formCampo.errors){
      return formCampo.errors['maxlength']
    }
  }
  verificaCamp(campo) {
    return {
      'erro': this.verificaValid(campo),
      'retorno': this.verificaValid(campo),
      'limite': this.verificaLength(campo)
    }
  }

}
