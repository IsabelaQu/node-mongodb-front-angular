import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.scss'],  
})
export class EditarProfessorComponent implements OnInit {
  professorForm: FormGroup;  
  professorId: string = '';

  constructor(
    private route: ActivatedRoute,
    private professorService: ProfessorService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // FormGroup
    this.professorForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Obter o ID do professor da rota
    this.professorId = this.route.snapshot.paramMap.get('id')!;
    this.loadProfessor();
  }

  loadProfessor(): void {
    this.professorService.getProfessorById(this.professorId).subscribe(professor => {
      this.professorForm.patchValue({
        nome: professor.nome,
        idade: professor.idade,
        departamento: professor.departamento,
      });
    });
  }

  onSubmit(): void {
    if (this.professorForm.valid) {
      this.professorService.updateProfessor(this.professorId, this.professorForm.value).subscribe(
        () => {
          alert('Professor atualizado com sucesso!');
          this.router.navigate(['/professores']);  // Redireciona para a lista de professores
        },
        error => {
          alert('Erro ao atualizar professor: ' + error.message);
        }
      );
    }
  }
}
