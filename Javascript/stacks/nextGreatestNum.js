var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(e => {
        let found = nums2.indexOf(e);
            
        //set a new array with just the numbers to the right of found
        let rest = nums2.slice(found + 1)
        
        let greater = rest.find(number => number > e)
        return greater || -1
    });
};