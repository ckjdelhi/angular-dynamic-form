import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Dynamic Data';

  public data: MainData;

  ngOnInit() {
    let d = {
      'Nokia CNRD-DB': {
        workflow: [
          {
            InstantiateStart: [
              {
                name: 'IP',
                type: 'text',
                value: '',
              },
              {
                name: 'USERNAME',
                type: 'text',
                value: '',
              },
              {
                name: 'PASSWORD',
                type: 'password',
                value: '',
              },
              {
                name: 'FILE-Istio-NodeSelect',
                type: 'text',
                value: '',
              },
              {
                name: 'WORKING_DIR',
                type: 'text',
                value: '',
              },
              {
                name: 'FILE-Nginx-Conf',
                type: 'text',
                value: '',
              },
              {
                name: 'FILE-NRD-PVC',
                type: 'text',
                value: '',
              },
              {
                name: 'FILE-NRD-DB-PVC',
                type: 'text',
                value: '',
              },
              {
                name: 'FILE-ConfigMap',
                type: 'text',
                value: '',
              },
              {
                name: 'Nginx-Conf-FileName',
                type: 'text',
                value: '',
              },
              {
                name: 'NRD-PVC-FileName',
                type: 'text',
                value: '',
              },
              {
                name: 'NRD-DB-PVC-FileName',
                type: 'text',
                value: '',
              },
              {
                name: 'ConfigMap-FileName',
                type: 'text',
                value: '',
              },
              {
                name: 'NRD-K8S-NAMESPACE',
                type: 'text',
                value: '',
              },
              {
                name: 'NRD-DB-K8S-NAMESPACE',
                type: 'text',
                value: '',
              },
              {
                name: 'Istio-NodeSelect-FileName ',
                type: 'text',
                value: '',
              },
            ],
          },
          {
            'Post-Instantiation Verification': [
              {
                name: 'IP',
                type: 'text',
                value: '',
              },
              {
                name: 'USERNAME',
                type: 'text',
                value: '',
              },
              {
                name: 'PASSWORD',
                type: 'password',
                value: '',
              },
              {
                name: 'NAMESPACE-NRD-DB',
                type: 'text',
                value: '',
              },
            ],
          },
        ],
        'Helm-Charts': [
          {
            helm: [
              {
                name: 'chartName',
                type: 'text',
                value: 'nrd_db',
              },
              {
                name: 'namespace',
                type: 'text',
                value: 'nrd_db',
              },
              {
                name: 'values',
                type: File,
                value: '',
              },
            ],
          },
        ],
      },
      'Nokia CNRD': {
        workflow: [
          {
            'Post-Instantiation Verification': [
              {
                name: 'IP',
                type: 'text',
                value: '',
              },
              {
                name: 'USERNAME',
                type: 'text',
                value: '',
              },
              {
                name: 'PASSWORD',
                type: 'password',
                value: '',
              },
              {
                name: 'NAMESPACE-NRD',
                type: 'text',
                value: '',
              },
            ],
          },
        ],
        'Helm-Charts': [
          {
            helm: [
              {
                name: 'chartName',
                type: 'text',
                value: 'nrd_db',
              },
              {
                name: 'namespace',
                type: 'text',
                value: 'nrd_db',
              },
              {
                name: 'values',
                type: 'file',
                value: '',
              },
            ],
          },
        ],
      },
    };
    this.data = d;
    console.log(this.data);
  }

  log() {
    console.log(this.data);
  }
  depictObjectKeyType<O>(o: O) {
    return Object.keys(o) as (keyof O)[];
  }
  onFileChanged(event) {
    this.img = event.target.files[0];
  }
}


class MainData {
  [index: string]: any;
}
