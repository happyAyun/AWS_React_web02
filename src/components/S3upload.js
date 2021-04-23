import React, {useState} from 'react';
import { uploadFile } from 'react-s3';

const S3_BUCKET = 'msa-b-4';
const DirName = 'pic';
const REGION = 'ap-northeast-2';
const accessKeyId = 'AKIA5VZTIAOJZQIKV5B6';
const secretAccessKey = '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';

const config = {
  bucketName: S3_BUCKET,
  dirName: DirName,
  region: REGION,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
};

const S3upload = (picinfo) => {
  const [picUrl, setPicUrl] = useState();

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then(data => setPicUrl(data.location))
      .catch(err => console.error(err));
  };

  console.log(picUrl);

  return picUrl;
};

export default S3upload;
