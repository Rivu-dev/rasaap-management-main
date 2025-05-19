import React from 'react'
import ShoppingDashboard from './pages/shopping-view/shopping-dashboard'
import ShoppingLayout from './components/shopping-view/layout'
import { Route, Routes } from 'react-router-dom'
import ShoppingServices from './pages/shopping-view/shopping-services'
import ShoppingAbout from './pages/shopping-view/shopping-about'
import ShoppingLeads from './pages/shopping-view/shopping-leads'
import ContactPage from './pages/shopping-view/shopping-contact'
import GalleryPage from './pages/shopping-view/shopping-gallery'
import ProductListingPage from './components/shopping-view/shopping-products'
import { SignIn } from '@clerk/clerk-react'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminLayout from './components/admin-view/layout'
import Lead from './components/shopping-view/lead'
import Packages from './pages/admin-view/packages'
import Products from './pages/admin-view/products'
import Services from './pages/admin-view/services'
import Smoproducts from './pages/admin-view/smoproducts'
import MyOrders from './components/shopping-view/orders'
import BusinessDetails from './components/shopping-view/business'
import NotificationPage from './components/shopping-view/notification'
import BillingDetails from './components/shopping-view/billingdetails'
import EditBusinessDetails from './components/shopping-view/profile'
import OrderListing from './pages/admin-view/Orderlisting'
import BusinessCategory from './components/shopping-view/selectbusiness'
import KYCPage from './components/shopping-view/kycpage1'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
    {/* common component */}
    <Routes>
    <Route path="/login" element={<SignIn/>}/> 

       <Route path="/shop" element={
        //  <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <ShoppingLayout/>
      //  </CheckAuth>
        }>
      <Route path="dashboard" element={<ShoppingDashboard/>}/> 
      <Route path="services" element={<ShoppingServices/>}/> 
      <Route path="about" element={<ShoppingAbout/>}/> 
      <Route path="leads" element={<ShoppingLeads/>}/> 
      <Route path="contact" element={<ContactPage/>}/> 
      <Route path="gallery" element={<GalleryPage/>}/> 
      <Route path="products" element={<ProductListingPage/>}/> 
      <Route path="lead" element={<Lead/>}/>
      <Route path="orders" element={<MyOrders/>}/> 
      <Route path="business" element={<BusinessDetails/>}/> 
      <Route path="notification" element={<NotificationPage/>}/> 
      <Route path="billing" element={<BillingDetails/>}/> 
      <Route path="business/profile" element={<EditBusinessDetails/>}/> 
      <Route path="selectbusiness" element={<BusinessCategory/>}/> 
      <Route path="kycpage1" element={<KYCPage/>}/> 

      
       

      
      </Route>



      <Route path="/admin" element={
        //  <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <AdminLayout/>
      //  </CheckAuth>
        }>
                <Route path="dashboard" element={<AdminDashboard/>}/> 
                <Route path="packages" element={<Packages/>}/> 
                <Route path="products" element={<Products/>}/> 
                <Route path="services" element={<Services/>}/> 
                <Route path="smoproducts" element={<Smoproducts/>}/> 
                <Route path="orderlisting" element={<OrderListing/>}/> 

        </Route>
      </Routes>
    </div>
  )
}

export default App