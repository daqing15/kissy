# xtemplate

# 1.4

 - [+] 兼容 mustache
 - [+] 支持 {{%%}}
 - [+] 支持变量做索引 {{data[d]}}
 - [!] 取消对负数支持，请用表达式替代 {{#if x === -1}} -> {{#if x === 0-1}}