/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useDeleteBusinessMutation, useGetUserBusinessQuery } from '@/redux/features/businessListApi';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import UploadBusiness from './UploadBusiness'; 

const UserBusinessList = () => {
  const { data, refetch } = useGetUserBusinessQuery(undefined);
  const [businessData, setBusinessData] = useState<any[]>([]);
  const [deleteBusiness] = useDeleteBusinessMutation();

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    if (data?.business) {
      setBusinessData(data?.business);
    }
  }, [data]);

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBusiness(id).then((res) => {
          if (res?.data?.success) {
            Swal.fire({
              text: res?.data?.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              refetch();
            });
          } else {
            Swal.fire({
              title: "Oops",
              // @ts-ignore
              text: res?.error?.data?.message,
              icon: "error",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        });
      }
    });
  };

  const handleAdd = () => {
    setEditId(null);
    setViewMode('form');
  };

  const handleEdit = (id: string) => {
    setEditId(id);
    setViewMode('form');
  };

  if (viewMode === 'form') {
    return (
      <UploadBusiness
        businessId={editId}
        onBack={() => {
          setViewMode('list');
          refetch();
        }}
      />
    );
  }

  const columns = [
    {
      title: 'S.No',
      key: 'sno',
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: <span className="ml-6">Name</span>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Employees',
      dataIndex: 'employees',
      key: 'employees',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-2">
          <p onClick={() => handleEdit(record._id)} className=' cursor-pointer '>
            <CiEdit size={22} />
          </p>
          <p onClick={() => handleDelete(record._id)}  className=' cursor-pointer '>
            <RiDeleteBin6Line size={20} color="red" />
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-5">
      <div className="flex items-center justify-end mb-5">
        <button
          onClick={handleAdd}
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Add Business
        </button>
      </div>

      <Table
        dataSource={businessData}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserBusinessList;
