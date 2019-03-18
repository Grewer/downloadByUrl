- [English](#English)
- [中文](#中文)


# English


## downloadByUrl

> This repository is created based on the https://github.com/PixelsCommander/Download-File-JS package


## demo
[click](https://grewer.github.io/downloadByUrl/example/)


## Advantages
- Not blocked by the browser after the ajax request
- Compatible with Chrome, Firefox, Safari, IE (at least IE5 or above)
- 2kb size

## Download

```
npm i downloadbyurl
```

## Usage

```
window.downloadByUrl('./test.jpg')
```

or

```
import downloadByUrl from 'downloadbyurl'
downloadByUrl('./test.jpg')
```


## Result
```
const result = downloadByUrl('./test.jpg')
// If some pictures are not allowed to be downloaded, they will not be downloaded and cannot be detected.
if(result){
    alert('success')
}
```

## License  
MIT



# 中文

## downloadByUrl

>此存储库基于 https://github.com/PixelsCommander/Download-File-JS 包创建


## 例子
[点击](https://grewer.github.io/downloadByUrl/example/)


## 优点
- 在 ajax 请求后,不被浏览器拦截
- 兼容 Chrome,Firefox,Safari,IE(至少 IE5 以上)
- 2kb 大小

## 下载

```
npm i downloadbyurl
```

## 用法

```
window.downloadByUrl('./test.jpg')
```

或者


```
import downloadByUrl from 'downloadbyurl'
downloadByUrl('./test.jpg')
```


## 结果
```
const result = downloadByUrl('./test.jpg')
//  如果是某些头部不被允许下载的图片,会出现无法下载的情况,且无法被侦测
if(result){
    alert('下载成功')
}
```

## 许可证
MIT
