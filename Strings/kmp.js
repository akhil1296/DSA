/**
 * Input:  txt[] = "THIS IS A TEST TEXT"
        pat[] = "TEST"
Output: Pattern found at index 10

Input:  txt[] =  "AABAACAADAABAABA"
        pat[] =  "AABA"
Output: Pattern found at index 0
        Pattern found at index 9
        Pattern found at index 12
 */
class KMPAlgorithm{
    search(text, pattern){
        
        let lps = this.computeLPS(pattern);
        let j = 0 ;
        let i = 0 ;
        let textLength = text.length;
        let patternLength = pattern.length;
        while(i < textLength){
            let char = text.charAt(i);
            let patternChar = pattern.charAt(j);
            if(char === patternChar){
                i++; 
                j++;
            }
            if( j === patternLength){
                console.log('Pattern found at index : ', i - j );
                j = lps[j - 1];
            }
            else if( i < textLength && char !== patternChar){
                if( j !== 0 ){
                    j = lps[ j - 1 ];
                }
                else{
                    i = i + 1 ;
                }
            }
            
        }
    }
    computeLPS(pattern){
        let patternLength = pattern.length;
        let i = 1 ;
        let len = 0 ;
        let lps = new Array(patternLength);
        lps[0] = 0 ;
        // the loop calculates lps[i] for i = 1 to patternlength-1
        while( i < patternLength ){
            if(pattern.charAt(i) === pattern.charAt(len)){
                len++;
                lps[i] = len;
                i++; 
            }
            else{ // (pat[i] != pat[len])
                if(len !== 0){
                    len = lps[len - 1];
                }
                else{ // if (len == 0)
                    lps[i] = len ;
                    i++;

                }
            }
        }
        return lps;
    }
}
let text = "AABAACAADAABAABA";
let pattern = "AABA";
const obj = new KMPAlgorithm();
obj.search(text, pattern);
