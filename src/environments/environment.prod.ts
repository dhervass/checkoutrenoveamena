import { AppConfig, Environment } from '@orange/core';
import { Level } from '@nsalaun/ng-logger';
import { ProductsType } from '@orange/redux';

export const environment: AppConfig = {
  production: true,
  brand: Environment.jazztel,
  navigation: {
    dynamicRouting: true,
    url: '/api/hierarchyController/v1/eCareResidencialJazztel/getPagesNavigation',
    method: 'GET',
    responseType: 'json'
  },
  owcs: {
    name: 'eCareResidencialJazztel'
  },
  locale: 'es-ES',
  logLevel: Level.LOG,
  moduleId: '2462398822386',
  demoCurrentData: {
    currentNif: '',
    currentPhoneNumber: 0,
    currentInvoice: '',
    currentAccountNumber: 0,
    currentProductsType: ProductsType.Fixed
  },
  headers: {
    'z-app': '',
    'z-rol': '',
    'z-login': 'usuario2'
  }
};
