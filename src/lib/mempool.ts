import { Transaction } from "./transaction"

export class Mempool {
    private pool: Transaction[] = []
    constructor() {}


    //* Füge eine Transaktion in den Mempool hinzu
    add(transaction: Transaction) {
        this.pool.push(transaction)
    }

    //* Element an Stelle Index aus Mempool löschen
    private removeFromMempool(index: number) {
        for(let i=index; i < this.pool.length; i++) {
            this.pool[i] = this.pool[i+1]
        }
        this.pool.pop()
    }


    //* Entferne Transaktionen vom Mempool
    remove(transactions: Transaction[]) {
        for(let i = 0; i < transactions.length; i++) {
            for(let j=0; j < this.pool.length; j++) {
                if(transactions[i] === this.pool[j]) this.removeFromMempool(j)
            }
        }
    }


    getbestPaying(count: number): Transaction[] {
        this.pool.sort((a, b) => b.fee - a.fee);
        
    }
}