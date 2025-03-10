import { Table } from "antd";

const Enquire = () => { 
    const data = [
        { id: 1, sNo: 1, name: "John Doe", email: "john@example.com", description: "Software Engineer" },
        { id: 2, sNo: 2, name: "Jane Smith", email: "jane@example.com", description: "Product Manager" },
        { id: 3, sNo: 3, name: "Michael Brown", email: "michael@example.com", description: "UX Designer" },
      ];
      
      const columns = [
        { title: "S.No", dataIndex: "sNo", key: "sNo" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Description", dataIndex: "description", key: "description" },
      ]; 

    return (
        <div className=" mt-5">
            <Table dataSource={data} columns={columns} style={{border: "1px solid #E6E6E6" }}   scroll={{ x: 'max-content' }}   className=" rounded-lg "/>
        </div>
    );
};

export default Enquire;