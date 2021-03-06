import { Injector } from '@angular/core';
import { RestangularHttp } from './ng2-restangular-http';
export declare class Restangular {
    configObj: any;
    private injector;
    private http;
    provider: any;
    extendCollection: any;
    copy: any;
    configuration: any;
    service: any;
    id: any;
    route: any;
    parentResource: any;
    restangularCollection: any;
    cannonicalId: any;
    etag: any;
    selfLink: any;
    get: any;
    getList: any;
    put: any;
    post: any;
    remove: any;
    head: any;
    trace: any;
    options: any;
    patch: any;
    getRestangularUrl: any;
    getRequestedUrl: any;
    putElement: any;
    addRestangularMethod: any;
    getParentList: any;
    clone: any;
    ids: any;
    httpConfig: any;
    reqParams: any;
    one: any;
    all: any;
    several: any;
    oneUrl: any;
    allUrl: any;
    customPUT: any;
    customPATCH: any;
    customPOST: any;
    customDELETE: any;
    customGET: any;
    customGETLIST: any;
    customOperation: any;
    doPUT: any;
    doPATCH: any;
    doPOST: any;
    doDELETE: any;
    doGET: any;
    doGETLIST: any;
    fromServer: any;
    withConfig: any;
    withHttpConfig: any;
    singleOne: any;
    plain: any;
    save: any;
    restangularized: any;
    constructor(configObj: any, injector: Injector, http: RestangularHttp);
    setDefaultConfig(): void;
}
