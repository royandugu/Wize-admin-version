type UploadImage={
    data:string;
    status:boolean;
}

const returnObj:UploadImage={data:"", status:false};

export const uploadImage=async (file:File|undefined, edgestore:any):Promise<{data:string, status:boolean}>=>{
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