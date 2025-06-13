"use client";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  price: HTMLInputElement;
  description: HTMLInputElement;
  status: HTMLInputElement;
}
interface FormElement extends HTMLFormElement {
  elements: FormElements;
}
interface Product {
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  product_status: string;
}
const AddProduct = () => {
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [images, setImages] = useState<File | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setImages(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<FormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const title = form.elements.title.value;
    const price = parseInt(form.elements.price.value);
    const description = form.elements.description.value;
    const product_status = form.elements.status.value;
    const quantity = 0;

    setLoginLoading(true);
    const formData = new FormData();

    if (images) {
      formData.append("image", images);
    } else {
      console.error("No image selected!");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: process.env.NEXT_PUBLIC_ImageBB_API_Key as string,
          },
        }
      );

      const image: string = response.data.data.url;

      const allData: Product = {
        title,
        price,
        description,
        product_status,
        quantity,
        image,
      };

      const resp = await axios.post<{ message: string; success: boolean }>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AddProduct`,
        allData
      );

      if (resp?.data?.success) {
        router.push("/burger");
        toast.success("Product Add Success");
      }

      setLoginLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center my-4 lg:my-8">
        <div className="border-2 border-[#e5e5e5] rounded-md">
          <div className="md:px-[60px] px-[20px] pb-[20px] md:pb-14">
            <h1 className="text-center text-lg md:text-2xl my-4 md:my-10 uppercase">
              Product Information
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-500">Title *</label>
                <br />
                <input
                  type="text"
                  name="title"
                  required
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[500px] lg:w-[700px] md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                />
              </div>
              <div className="mb-2">
                <label className="text-gray-500">Select Photo *</label>
                <br />
                <input
                  onChange={handleImageChange}
                  type="file"
                  required
                  className="file-input w-full bg-[#f3f4f7] border-[#e5e5e5] text-gray-500 rounded-none py-[6px] outline-none px-5"
                />
              </div>
              <div>
                <label className="text-gray-500">Price *</label>
                <br />
                <input
                  type="number"
                  name="price"
                  required
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[500px] lg:w-[700px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none border-[#e5e5e5]"
                />
              </div>
              <div>
                <label className="text-gray-500">Product Status *</label>
                <br />
                <select
                  name="status"
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[500px] lg:w-[700px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none border-[#e5e5e5]"
                >
                  <option value="New">New</option>
                  <option value="Recommended">Recommended</option>
                </select>
              </div>
              <div>
                <label className="text-gray-500">Description *</label>
                <br />
                <textarea
                  name="description"
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[500px] lg:w-[700px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none border-[#e5e5e5]"
                  cols={3}
                  rows={3}
                  required
                ></textarea>
              </div>

              {loginLoading ? (
                <h2 className="bg-[#89b758] text-white flex items-center justify-center text-lg w-full py-[10px] mt-4">
                  <Loader className="animate-spin" size={25} />
                </h2>
              ) : (
                <button className="bg-[#89b758] text-white cursor-pointer text-lg w-full py-[10px] mt-4">
                  Add Product
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
