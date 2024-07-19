import React from 'react'

function AdminPage() {
  return (
    <div className='flex justify-center mt-24'>
        <form action="" method="post">
            <div className="text-4xl font-bold pb-5">Post Form</div>
            <div className="section">
                <label htmlFor="topic" className='font-bold'>Topic</label>
                <input type="text" name="topic" id="topic"  className="input input-bordered w-full max-w-xs mt-2 mb-4"/>
            </div>
            <div className="section">
                <label htmlFor="story" className='font-bold'>Story</label>
                <textarea name="detail" id="datail" className="input input-bordered w-full max-w-xs mt-2 mb-4"></textarea>
            </div>
            <div className="section">
                <label htmlFor="date" className='font-bold'>Date</label>
                <input type="date" name="date" id="date"  className="input input-bordered w-full max-w-xs mt-2 mb-4"/>
            </div>
            <div className="section">
                <label htmlFor="file-upload" className='font-bold'>Picture</label>
                <input id="file-upload" name="file-upload" type="file" className='mt-2 ml-2 mb-4'/>
            </div>
            <div className="section">
                <label htmlFor="detail" className='font-bold'>Detail</label>
                <textarea name="detail" id="datail" className="input input-bordered w-full max-w-xs mt-2 mb-4"></textarea>
            </div>
            <button type="submit" className='btn w-[23em]'>Post</button>
        </form>
    </div>
  )
}

export default AdminPage