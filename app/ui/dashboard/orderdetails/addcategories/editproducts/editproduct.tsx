import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { useContext, useRef } from "react";
import { ProductContext } from "@/app/context/ProductsContext/ProductContext";
import { useFormik } from "formik";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";

const Editproduct = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const ctx = useContext(ProductContext);
  const ctx1 = useContext(ModalContext);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onDragEnter = () => {
    wrapperRef.current?.classList.add("dragover");
  };
  const onDragLeave = () => {
    wrapperRef.current?.classList.remove("dragover");
  };

  const onDrag = () => {
    wrapperRef.current?.classList.remove("dragover");
  };

  const onFileDrag = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFile = e.target.files[0];
    if (newFile) {
      const updateList = [...fileList, newFile];
      setFileList(updateList);
    }
  };
  console.log(fileList);

  const formik = useFormik({
    initialValues: {
      category: "defaultCategory",
      productName: "",
      quantity: "5",
      stock: "Stock Options",
      cost: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      className="text-sm flex py-10 flex-col gap-4"
      onSubmit={formik.handleSubmit}
    >
      <section>
        <h1 className="text-xl text-gray-400">Edit Product</h1>
      </section>
      <section>
        <div>
          <select
            name="category"
            id="category"
            className="  w-[40%] py-2 px-3 bg-[#F0F0FA] rounded-md"
            onChange={formik.handleChange}
            value={formik.values.category}
          >
            <option value="defaultCategory">Select category</option>
            {ctx.StateCategory.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section>
        <div>
          <p>Product Name</p>
          <input
            type="text"
            name="productName"
            placeholder="product name"
            id="productName"
            className="w-[40%] pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
            onChange={formik.handleChange}
            value={formik.values.productName}
          />
        </div>
      </section>
      <section>
        <div>
          <p>Quantity</p>
          <input
            type="number"
            name="quantity"
            id="quantity"
            onChange={formik.handleChange}
            value={formik.values.quantity}
            placeholder="30"
            className="w-[40%] pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
          />
        </div>
      </section>
      <section>
        <select
          name="stock"
          id="stock"
          className="w-[40%] py-2 px-3 bg-[#F0F0FA] rounded-md"
          onChange={formik.handleChange}
          value={formik.values.stock}
        >
          <option value="Stock Options">Stock Options</option>
          <option value="In stock">In stock</option>
          <option value="Out of Stock">Out of Stock </option>
        </select>
      </section>
      <section>
        <div>
          <p className="pb-2">Add Images</p>
          <div className="flex gap-4 items-end ">
            <section className="h-[290px] w-[290px] bg-[#F0F0FA] border-dashed border-2 border-sky-500  text-sm grid place-items-center ">
              <div
                className="divDrag"
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrag={onDrag}
              >
                <div className="grid place-items-center relative ">
                  <input
                    type="file"
                    name=""
                    id=""
                    onChange={onFileDrag}
                    className="absolute  top-0 left-0 opacity-0 w-full h-full border-4 "
                  />

                  <Image
                    src="/download.png"
                    width={500}
                    height={500}
                    className="h-[42px] w-[42px]"
                    sizes="100vw"
                    alt="Picture of the author"
                  />
                </div>
                <p className="text-center">Upload Images</p>
                <p className="text-xs text-gray-400 text-center">
                  Drag and drop
                </p>
              </div>
            </section>

            {fileList.length > 0
              ? fileList.map((filesArray, index) => (
                  <section
                    className=" relative h-[150px] w-[150px] bg-[#F0F0FA] border"
                    key={index}
                  >
                    <Image
                      src={"/" + filesArray.name}
                      alt="Picture of the author"
                      sizes="500px"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </section>
                ))
              : null}
            {/* <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section>
            <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section>
            <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section>
            <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section> */}
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>Description</p>
          <textarea
            name="description"
            id="description"
            placeholder="Type details..."
            cols={30}
            rows={1}
            onChange={formik.handleChange}
            value={formik.values.description}
            className="border rounded-md bg-[#F0F0FA] p-3"
          ></textarea>
        </div>
      </section>
      <section>
        <div>
          <p>Cost</p>
          <div>
            <input
              type="number"
              name="cost"
              id="cost"
              onChange={formik.handleChange}
              value={formik.values.cost}
              placeholder="GHC 30.00"
              className=" pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
            />
          </div>
        </div>
      </section>
      <div className=" py-4 grid place-items-center">
        <section className="flex gap-4">
          <button
            className=" rounded-lg py-1 bg-black text-white px-10"
            type="submit"
          >
            Save
          </button>
          <button
            className=" border rounded-lg py-1 px-10"
            onClick={(e) => ctx1.closepage()}
          >
            close
          </button>
        </section>
      </div>
    </form>
  );
};

export default Editproduct;
