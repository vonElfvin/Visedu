import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ALPHABET_NUMBERS_PATTERN, ALPHABET_PATTERN } from '../../shared/shared.constants';
import { ClassService } from '../shared/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  classForm = new FormGroup({
    school: new FormControl('', [
        Validators.required,
      ],
    ),
    name: new FormControl('', [
        Validators.required,
        Validators.pattern(ALPHABET_NUMBERS_PATTERN),
      ],
    )
  });

  constructor(private classService: ClassService) { }

  ngOnInit() {
  }

  get school() {
    return this.classForm.get('school');
  }

  get name() {
    return this.classForm.get('name');
  }

  submit() {
    console.log(this.classForm.value);
    this.classService.createClass(this.classForm.value);
  }
}
