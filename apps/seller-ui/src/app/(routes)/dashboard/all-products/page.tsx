"use client";
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  GlobalFiltering,
} from "@tanstack/react-table";

import {
  Search,
  Pencil,
  Trash,
  Eye,
  Plus,
  BarChart,
  Star,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";
import axiosInstance from "apps/seller-ui/src/utils/axiosInstance";

const fetchProducts = async () => {
  const res = await axiosInstance.get("/products//api/get-shop-products");
  return res?.data?.products;
};

const ProductList = () => {
  cosnt[(GlobalFiltering, setGlobalFilter)] = useState("");
  const [analyticsData, setAnalyticsData] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>();

  return <div></div>;
};

export default ProductList;
