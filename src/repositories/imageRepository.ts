import AWS from "aws-sdk";
import config from "../config/";
import { AppError } from "../errors/appError";

class ImageRepository {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.privateAccessKey,
    });
  }

  uploadImage(name: string, image: Buffer, type: string): Promise<string> {
    const Key = `${name}.${type.split("/")[1]}`;
    return new Promise((resolve, reject) => {
      const params: AWS.S3.PutObjectRequest = {
        Bucket: config.aws.s3BucketName || "",
        Key,
        Body: image,
        ContentType: type,
        ACL: "public-read",
      };

      this.s3.upload(params, (err, data) => {
        if (err) {
          reject(new AppError(err.message, 502));
        }
        console.log(`File uploaded successfully ${data.Location}`);
        resolve(data.Location);
      });
    });
  }

  deleteImage(Key: string): Promise<boolean> {
    Key = Key.split("/")[3].replace(/ /g, "_");
    return new Promise((resolve, reject) => {
      const params: AWS.S3.DeleteObjectRequest = {
        Bucket: config.aws.s3BucketName || "",
        Key,
      };
      console.log(params);
      this.s3.deleteObject(params, (err, data) => {
        if (err) {
          reject(new AppError(err.message, 502));
        }
        console.log(JSON.stringify(data));
        resolve(true);
      });
    });
  }
}

export default ImageRepository; 