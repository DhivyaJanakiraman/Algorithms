function rightSideViewBT(root) {
      let visibleValues = [];
      if(root === null){
          return visibleValues;
      }

      let queue = new Queue();
      queue.add(root);

      while(!queue.isEmpty()){
          let size = queue.size();
          for(let i=0; i<size; i++){
              let current = queue.remove();

              if(i === size - 1){
                  visibleValues.push(current.val);
              }

              if(current.left !== null){
                  queue.add(current.left);
              }
              if(current.right !== null){
                  queue.add(current.right);
              }
          }
      }
      return visibleValues;
}