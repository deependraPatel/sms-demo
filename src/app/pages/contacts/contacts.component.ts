import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { RestService } from '../../services/shared/rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  
  //vars
  dtOptions: DataTables.Settings = {};
  persons: Contact[];
  cnt = 1;
  currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  //constructor
  constructor(
    public toastr: ToastrService,
    public restApi: RestService,
    public router: Router
  ) {

  }

  //init
  ngOnInit() {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        dataTablesParameters['_id'] = that.currentUser.user._id;
        this.restApi.getContacts(dataTablesParameters).subscribe((res: any) => {
            that.persons = res.data;

            callback({
              recordsTotal: res.recordsTotal,
              recordsFiltered: res.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{data: 'cnt'}, { data: 'fullName' }, { data: 'mobile' }, {data: 'others'}, {data: 'action'}]
    };

    
  };
}

class Contact {
  _id: String;
  fullName: String;
  mobile: Number;
  Others: any;
  user: any;
}