# # Bubble sort algoritm
# def sorting(arr):
#     for i in range(len(arr)):
#         for j in range(len(arr)-i-1):
#             if arr[j]> arr[j+1]:
#                 arr[j],arr[j+1] = arr[j+1], arr[j];

# arr = [34,24,26,14,11,9,5,35,45,48]
# sorting(numbers)
# print(numbers)


# # Merge sort algoritm
def mergeSorting(arr):
    if len(arr)>1:
        # finding the mid of the array
        mid = len(arr)//2
        
        # dividing the array elements
        left = arr[:mid]
        
        # second half of array
        right = arr[mid:]
        
        # sorting first half of array
        mergeSorting(left)
        
        # sorting second half of array
        mergeSorting(right)
        
        i = j = k = 0;
        
        # Copy data to temp arrays left[] and right[]
        while i<len(left) and j<len(right) :
            if left[i]<right[j] :
                arr[k] = left[i]
                i+=1;
            else:
                arr[k] = right[j]
                j+=1;
            k+=1;
        
        # Checking if any element was left?
        while i<len(left):
            arr[k] = left[i]
            i+=1;
            k+=1;
        while j<len(right):
            arr[k] = right[j]
            j+=1;
            k+=1;

arr = [34,24,26,14,11,9,5,35,45,48]
print(arr)
mergeSorting(arr)
print(arr)




