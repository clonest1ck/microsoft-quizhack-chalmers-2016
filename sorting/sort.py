import re
alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
def sortWord(word):
	return ''.join(sorted(word))

def main():
    inputfile = open("input")
    inputdata = inputfile.read()
    inputfile.close()

    #Split input string into words
    splitData = inputdata.split("\n")
    finalWordList = []
    for word in splitData:
    	newWord = word.replace("\r", "")
    	finalWordList.append(newWord)
    #print(finalWordList)

    ## ALL WORDS ARE NOW IN LISt ## 

    sortedWordList = []
    for word in finalWordList:
    	sortedWordList.append(sortWord(word))

    #print(sortedWordList)

    alpha = []
    nonAlpha = []
    uppercase = []
    lowercase = []
    for word in sortedWordList:
    	pos = 0
        while word[pos].isdigit():
        	pos+=1
        	if(word[pos] == '0'):
        		print(pos+1)
  	    
        if word[pos].isupper():
  			uppercase.append(word)
        else:
  			lowercase.append(word)



    lowercase= sorted(lowercase, key=lambda x: re.sub('[^A-Za-z]+', '', x).lower())
    uppercase= sorted(uppercase, key=lambda x: re.sub('[^A-Za-z]+', '', x).lower())

    #uppercase = [test(str) for str in uppercase]
    #uppercase = [test(str) for str in uppercase]

    for word in uppercase:
    	pos = 0
    	while pos < len(word)-1:
    		if word[pos] == word[pos+1]:
    			word = word[:pos] + word[(pos+1):]
    			#word[pos] = word[pos].lower()
    		pos+=1
    	

    	
    print(uppercase)
    #mergedLists = lowercase + uppercase
    #print mergedLists

if __name__ == "__main__":
    main()