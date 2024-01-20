type UploadFile={
    data:string;
    status:boolean;
}

const returnObj:UploadFile={data:"", status:false};

export const uploadFile=async (file:File|undefined, edgestore:any):Promise<{data:string, status:boolean}>=>{
    try {
        if (file) {
          const res = await edgestore.publicFiles.upload({
            file,
            onProgressChange: async (progress:number) => {},
          });
          returnObj.data=res.url;
          returnObj.status=true;
          return returnObj;
        }
        return returnObj;
      }
      catch (err) {
        console.log(err);
        return returnObj;
    }
}