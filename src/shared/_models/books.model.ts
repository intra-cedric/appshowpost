export class Books {
    constructor(
        public userId  : number,
        public id     : string,
        public title   : string,
        public body    : string
    ) {  }
  
}

export interface Books {
    userId  : number;
    id     : string;
    title   : string;
    body    : string;
}
