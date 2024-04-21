import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function useProduct() {
  //   const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    image:null,
    countInStock: 0,
    category_id: 1,
    brand_id: 1,
    featured: 0,
  });

  const {
    name,
    price,
    description,
    countInStock,
    category_id,
    brand_id,
    featured,
  } = formData;

  //   const [update, setUpdate] = useState(false);

  const handleChange = (event) => {
    let updatedFormData = {};
    if (event.target.name === "image") {
      const files = event.target.files;
      if (files) {
        updatedFormData = {
          ...formData,
          image: files[0],
        };
      }
    }else if(event.target.name === "featured"){
      updatedFormData = {
        ...formData,
        featured: event.target.checked ? 1 : 0
      }
    } else {
      updatedFormData = {
        ...formData,
        [event.target.name]: event.target.value,
      };
    }
    setFormData(updatedFormData);
  };

  const { token } = useSelector((state) => state.token);
  const addProduct = async (formData) => {
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/products",
      formData,
      {
        headers: {
          "Content-Type" : "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true
      }
    );
    return data;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // setIsLoading(true);

      // if(update && id){
      //   const data = formData
      //   // console.log(data,id)
      //   const response = await updateProduct(id,data);
      //   setIsLoading(false);
      //   toast.success("Product updated successfully");
      // }else{
        const response = await addProduct(formData);
        console.log(response)
      //   setIsLoading(false);
      toast.success("Product added successfully");

      // }

      // return true;
    } catch (error) {
      toast.error(error.response);
    }
  };

  return {
    name,
    price,
    description,
    countInStock,
    category_id,
    brand_id,
    featured,
    onSubmit,
    handleChange,
  };
}
