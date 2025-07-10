function getResultByPath(path,response){
    const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');
    const keys=normalizedPath.split('.');

    let result = response;
    for(let key of keys){
        if(result === undefined || result ===null) break;
        result = result[key];
    }
    return result;
}
const path = "data.results.status";
const obj = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}
console.log(getResultByPath(path, obj));