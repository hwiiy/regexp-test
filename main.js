const str = `
010-1234-5678.
giro123@naver.com
I love Giro.
https://www.naver.com/
hxyp
동해물과 백두산이
`;

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
