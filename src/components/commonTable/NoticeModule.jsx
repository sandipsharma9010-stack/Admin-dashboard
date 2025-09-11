import React, { useState } from 'react';
import { FaUpload, FaDownload } from 'react-icons/fa';

export default function NoticeModule() {
    const [isOpen, setIsOpen] = useState(false);
    const [noticeType, setNoticeType] = useState('Mail');
    const privacyNoticeName = 'Accounts';
    const subject = 'Accounts';

    const handleUpload = (e) => {
        console.log('File uploaded:', e.target.files[0]);
    };

    const handleDownload = () => {
        console.log('Download sample clicked');
    };

    const handleSave = () => {
        console.log('Save clicked');
        setIsOpen(false);
    };

    const handleCancel = () => {
        console.log('Cancel clicked');
        setIsOpen(false);
    };

    return (
        <div className="p-6">
            <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Open Privacy Notice
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                        <h2 className="text-orange-600 text-xl font-bold mb-6">Send Privacy Notice</h2>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-700">Notice Type</span>
                                    <span>:</span>
                                </div>
                                <select value={noticeType} onChange={(e) => setNoticeType(e.target.value)} className="border border-gray-300 rounded px-3 py-1 w-40">
                                    <option value="Mail">Mail</option>
                                    <option value="SMS">SMS</option>
                                    <option value="Push">Push Notification</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-700">Privacy Notice Name</span>
                                    <span>:</span>
                                </div>
                                <span>{privacyNoticeName}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-700">Subject</span>
                                    <span>:</span>
                                </div>
                                <span>{subject}</span>
                            </div>

                            <div className="flex space-x-4 pt-4 items-start justify-center">
                                <div>
                                    <label htmlFor="file-upload" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center space-x-2">
                                        <FaUpload />
                                        <span>Upload Document</span>
                                    </label>
                                    <input id="file-upload" type="file" accept=".csv" className="hidden" onChange={handleUpload} />
                                    <p className="text-xs text-red-500 mt-1">*(only .csv file allowed)</p>
                                </div>

                                <button onClick={handleDownload} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2">
                                    <FaDownload />
                                    <span>Download Sample</span>
                                </button>
                            </div>

                            <div className="flex justify-center space-x-3 mt-6">
                                <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                                    Save
                                </button>
                                <button onClick={handleCancel} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
