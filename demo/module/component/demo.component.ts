import { Component, OnInit } from '@angular/core';
import { Logger } from '@nsalaun/ng-logger';
import { OrangeApi, CoreActionTypes, CurrentDataPayloadInterface, GridControllerDefaultPayloadInterface, DataLayerPayloadInterface, OwcsPayloadInterface } from '@orange/redux';

import { PageHierarchyControllerDefaultActionInterface } from '@orange/redux/lib/core/owcs/pageHierarchyController/pageHierarchyController.models';
import { environment } from './../../../src/environments/environment';

@Component({
  selector: 'orange-demo-app',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public environmentBrand = '';
  public moduleData: any = null;

  constructor(
    private orangeApi: OrangeApi,
    private logger: Logger
  ) { }

  ngOnInit() {
    this.setCurrentData();
    this.setDataLayer();

    this.environmentBrand = environment.brand;
    if (environment.moduleId.length > 0) {
      this.getModuleContent();
    }
  }

  getRoutesPages() {

    // const data: PageHierarchyControllerDefaultActionInterface = {
    //   type: '',
    //   payload: {}
    // };
    // this.orangeApi.get(CoreActionTypes.PageHierarchy.get.API_PAGEHIERARCHYCONTROLLER_GET_DEFAULT, data)
    //   .subscribe(module => {
    //     this.logger.warn('Paginas: ', module);
    //   }, error => this.logger.error(error));
  }

  getModuleContent(): void {


    // const payloadOWCS: OwcsPayloadInterface = {

    //   path: {
    //     layoutId: '2462409064630'
    //     // layoutId: environment.moduleId
    //   }
    // };

    // this.orangeApi.get(CoreActionTypes.Owcs.API_OWCS_GET_LAYOUT, payloadOWCS).subscribe(res => {
    //   let moduleDataOWCS = true;
    // })

    const nombreModulo = 'orange-cesta-standalone';
    const payload: GridControllerDefaultPayloadInterface = {
      path: {
        id_page: environment.moduleId
      },
    };

    // this.moduleData = gridControllerMockResponse['centralSection'].find(componente => componente.compId === nombreModulo);

    // this.orangeApi.get(CoreActionTypes.GridController.get.API_GRIDCONTROLLER_GET_DEFAULT, payload)
    //   .subscribe(module => {
    //     if (!module || !module.centralSection) {
    //       module = gridControllerMockResponse;
    //       console.warn('INSERTANDO RESPUESTA MOCKEADA', module);
    //     }
    //     this.moduleData = module.centralSection.find(componente => componente.compId === nombreModulo);
    //   }, error => this.logger.error(error));
  }

  setCurrentData() {
    const payload: CurrentDataPayloadInterface = {
      currentData: environment.demoCurrentData
    };
    this.orangeApi.post(CoreActionTypes.CurrentData.post.API_CURRENTDATA_POST, payload);
  }

  setDataLayer() {
    const payload: DataLayerPayloadInterface = {
      dataLayer: environment.dataLayer
    };
    this.orangeApi.post(CoreActionTypes.DataLayer.post.API_DATALAYER_POST, payload);
  }

}
