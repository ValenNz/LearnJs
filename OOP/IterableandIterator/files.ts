/*  Iterable dan Iterator
            -   Salah satu fitur terbaru di ES6 adalah iterable
            -   Iterable adalah spesial object yang memiliki standarisasi
            -   Dengan mengikuti standarisasi Iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan
                menggunakan perulangan for...of
            -   Contoh yang sudah mengikuti standarisasi Iterable adalah string, Array, Object, dan lain-lain
        */

            interface Iterable<T>{
                [Symbol.iterator](): Iterator<T>
            }
    
            interface Iterator<T, TReturn = any, TNext = undefined>{
                next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
                return?(value?: TReturn): IteratorResult<T, TReturn>;
                throw?(e?: any): IteratorResult<T, TReturn>;
            }