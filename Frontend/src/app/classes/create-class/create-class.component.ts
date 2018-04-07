import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ALPHABET_NUMBERS_PATTERN } from '../../shared/shared.constants';
import { ClassService } from '../shared/class.service';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../shared/class.model';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  _id: string;

  classForm = new FormGroup({
    school: new FormControl('', [
        Validators.required,
      ],
    ),
    name: new FormControl('', [
        Validators.required,
        Validators.pattern(ALPHABET_NUMBERS_PATTERN),
      ],
    ),
  });

  constructor(
    private classService: ClassService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const className = this.route.snapshot.queryParams.klass;
    if (className) {
      this.classService.getClassWithName(className).subscribe(c => {
        this.school = c.school as any;
        this.name = c.name as any;
        this._id = c._id;
      });
    }
  }

  get school() {
    return this.classForm.get('school');
  }

  set school(schoolName) {
    this.school.setValue(schoolName);
  }

  get name() {
    return this.classForm.get('name');
  }

  set name(className) {
    this.name.setValue(className);
  }

  submit() {
    const classData = this.classForm.value;

    // if edit
    if (this._id) {
      this.classService.updateClass(classData, this._id);

    // if create
    } else {
      this.classService.createClass(classData);
    }
  }
}
