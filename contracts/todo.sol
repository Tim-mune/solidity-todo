// SPDX-License-Identifier: MIT
pragma solidity ^0.8;
contract Todo {
    address public  owner;
    enum task_status{
        done,
        pending
    }
    struct  Task{
        uint256 id;
        string title;
        string content;
        task_status status;
        address createdBy;
    }

    mapping (uint256=>Task)public tasks;
    uint public task_count=0;
    modifier onlyOwner(){
        require(msg.sender==owner,"only owner can perform this operation");
        _;
    }

    Task[] private  total_tasks;
    Task[] private  completed_tasks;
    Task[] private  pending_tasks;

    function create_todo(string calldata name, string calldata content) external {
        uint256 task_id=task_count;
        Task memory newtask=Task(task_id,name,content,task_status.pending,owner);
        require(newtask.status==task_status.pending);
        tasks[task_id]=newtask;
        pending_tasks.push(newtask);
        total_tasks.push(newtask);   
        task_count++;
    }

    function getTasks()external view  returns (Task[] memory) {
        return total_tasks;
    }

    function complete_task(uint _id)external view returns (Task memory) {
        Task memory todo_item=total_tasks[getItemIndex(total_tasks, _id)];
        todo_item.status=task_status.done;
        return todo_item;
    }

    function getSingleTask(uint _id)external view returns (Task memory) {
        Task memory todo_item=total_tasks[getItemIndex(total_tasks, _id)];
        return todo_item;
    }

    // function deleteTask()external {

    // }


 // utils
function getItemIndex(Task[] memory myarr,uint _id)public  pure   returns (uint) {
    uint index_of_item;
for (uint i; i<myarr.length; i++){
    if (myarr[i].id==_id) {
        index_of_item=i;
    }
}
return index_of_item;
 }
}


