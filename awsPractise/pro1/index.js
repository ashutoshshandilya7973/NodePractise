import {S3Client,GetObjectCommand} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"


const s3Client=new S3Client({
   region: "eu-north-1",
    credentials:{
        accessKeyId:"",
        secretAccessKey:""
    }
})

 async function getObjectUrl(key){
    const command=new GetObjectCommand({
        Bucket:"ashutosh-course-app",
        Key:key,
    })

    const url= await getSignedUrl(s3Client,command,{expiresIn:20});
    return url
}

async function getUrl(){
    const url=await getObjectUrl("AshutoshPic.jpeg")
    console.log(url)
}
getUrl()