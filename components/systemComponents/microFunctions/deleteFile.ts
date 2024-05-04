type DeleteImage={
    status:boolean;
}

const returnObj:DeleteImage={status:false};

export const deleteFile=async (url:string|undefined, edgestore:any):Promise<{status:boolean}>=>{
  try {
        if (url) {
          const res=await edgestore.publicFiles.delete({
            url: url,
          });
          returnObj.status=true;
          return returnObj;
        }
        return returnObj;
      }
      catch (err) {
        return returnObj;
    }
}