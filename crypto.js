const crypto = require("crypto");
// MD5和SHA1
// const hash = crypto.createHash("md5");
// update()方法默认字符串编码为UTF-8，也可以传入Buffer。
// hash.update("Hello,world!");
// hash.update("Hello,nodejs!");
// console.log(hash.digest("hex"));
// console.log("\n--------divider--------\n");
// Hmac 哈希算法
// const hmac = crypto.createHmac("sha256", "secret-key");
// hmac.update("Hello,world!");
// hmac.update("Hello,nodejs!");

// console.log(hmac.digest("hex"));

// AES 对称加密算法
// function aesEncrypt(data, key) {
//   const cipher = crypto.createCipher("aes192", key);
//   var crypted = cipher.update(data, "utf8", "hex");
//   crypted += cipher.final("hex");
//   return crypted;
// }

// function aesDecrypt(encryted, key) {
//   const decipher = crypto.createDecipher("aes192", key);
//   var decrypted = decipher.update(encryted, "hex", "utf8");
//   decrypted += decipher.final("utf8");
//   return decrypted;
// }

// var data = "Hello,this is a secret message!";
// var key = "Password!";
// var encrypted = aesEncrypt(data, key);
// var decrypted = aesDecrypt(encrypted, key);

// console.log("Plain text:" + data);
// console.log("Encrypted text:" + encrypted);
// console.log("Decrypted text:" + decrypted);

// Diffie-Hellman DH算法

var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log("Prime:" + prime.toString("hex"));
console.log("Generator:" + generator.toString("hex"));

var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

console.log("Secret of Xiao Ming:" + ming_secret.toString("hex"));
console.log("Secret of Xiao Hong:" + hong_secret.toString("hex"));

// RSA 非对称加密算法（！！！！！实验未成功）

//生成初始私钥
// openssl rsa -in rsa-key.pem -outform PEM -out rsa-prv.pem
//生成初始公钥
// openssl rsa -in rsa-key.pem -outform PEM -pubout -out rsa-pub.pem
// const fs = require("fs");

// function loadKey(file) {
//   return fs.readFileSync(file, "utf8");
// }

// let prvKey = loadKey("./rsa-prv.pem");
// pubKey = loadKey("./rsa-pub.pem");
// message = "Hello,world!";
// let enc_by_prv = crypto.privateEncrypt(prvKey, Buffer.from(message, "utf8"));
// console.log("encryted by private key:" + enc_by_prv.toString("hex"));

// let dec_by_pub = crypto.publicDecrypt(pubKey, Buffer.from(message, "utf8"));
// console.log("decrypted by public key:" + dec_by_pub.toString("utf8"));
