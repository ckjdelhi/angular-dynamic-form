import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Dynamic Data';

  public data: MainData;
  files = new Map<string, string>();
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
                type: 'file',
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
                type: 'file',
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
    console.log(JSON.stringify(this.data));
  }
  public fixSpace(input: any): string {
    return input.replace(/\s+/g, '').trim();
  }
  log() {
    console.log(JSON.stringify(this.files));

    for (let file of this.depictObjectKeyType(this.data)) {
      for (let d of this.depictObjectKeyType(this.data[file])) {
        for (let w of this.data[file][d]) {
          for (let w1 of this.depictObjectKeyType(w)) {
            for (let w2 of w[w1]) {
              if (w2.type == 'file') {
                let aa =
                  this.fixSpace(file) +
                  '_' +
                  this.fixSpace(d) +
                  '_' +
                  this.fixSpace(w1) +
                  '_' +
                  this.fixSpace(w2.name);
                w2.data = this.files.get(aa);
                console.log(JSON.stringify(w2));
              }
            }
          }
        }
      }
    }

    console.log(this.data);
  }
  depictObjectKeyType<O>(o: O) {
    return Object.keys(o) as (keyof O)[];
  }
  onFileChanged(event, id) {
    this.files.set(id, event.target.files[0].name);
  }
}

class MainData {
  [index: string]: any;
}
