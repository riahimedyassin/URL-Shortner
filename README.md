# URL Shortner
## How to use 
You just have to bind this project with your own domain as it is a url shortner , better find a short URL domain.

#### Note :
The public folder is just for running tests , you could implement and change this URL shortner as you like.

## How it works ?
The posted URL will be received and hashed using the SHA1 algorithm. In that case , we will be generating a long string , to simplify thing , we will take only the fist N.th letter (10 in this case).

I did some researches and I found out that this algorithm uses a 64Bit encryption , that means the probability of collision between two or more links is impossible. Using only the first 10 caracters , I was reassured that collision still **almost** impossible. 

[**You can read more about this here**](https://stackoverflow.com/questions/51005488/how-to-use-cryptojs-in-javascript)
