import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <main className=''>
            <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    {/* Sidebar */}
                    <div className="card shadow border-0">
                        <div className="card-body">
                            <h4>Sidebar</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 dashboard">
                    {/* Dashboard */}
                    <div className="card shadow border-0">
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <h4>Welcome to Admin Console</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </main>
        <Footer/>
    </>
  )
}

export default Dashboard