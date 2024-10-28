import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:44350/api/",
});

// API User 
export const register = async (userData) => {
    try {
        const response = await api.post('user/register', userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await api.post('user/login', credentials);

        // Assuming the response structure contains the token as shown in your earlier message
        const { token } = response.data;

        // Store the token in local storage for later use
        localStorage.setItem('token', token.token); // Adjust according to your token structure
        localStorage.setItem('userId', token.userId);
        localStorage.setItem('username', token.username);



        return {
            success: true,
            data: response.data.token,
        };
    } catch (error) {
        // Handle error gracefully
        const errorMsg = error.response ? error.response.data.message : 'An unexpected error occurred.';
        return {
            success: false,
            message: errorMsg,
        };
    }
};

export const forgotPassword = async (email) => {
    try {
        const response = await api.post('user/forgot-password', { email });
        return response.data; // Return response data as needed
    } catch (error) {
        throw error.response ? error.response.data : error; // Handle errors
    }
};

export const changePassword = async (passwordData) => {
    const token = localStorage.getItem('token');

    // Kiểm tra nếu token không tồn tại
    if (!token) {
        throw new Error('Token không tồn tại. Vui lòng đăng nhập lại.'); // Hoặc xử lý theo cách khác
    }

    try {
        const response = await api.post('user/change-password', passwordData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Trả về dữ liệu phản hồi như mong muốn
    } catch (error) {
        // Kiểm tra nếu error.response tồn tại và có dữ liệu
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Có lỗi xảy ra.'); // Trả về thông báo lỗi từ API
        } else {
            throw new Error('Có lỗi xảy ra trong quá trình thay đổi mật khẩu.'); // Thông báo lỗi chung
        }
    }
};


//API Interview
//function create 
export const createInterview = async (interviewData) => {

    const token = localStorage.getItem('token');

    try {
        const response = await api.post('Interview', interviewData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error posting interview:", error);
        throw error; // or handle error as needed
    }
};
//get all interview
export const fetchInterviews = async () => {

    try {
        const response = await api.get('Interview/interviews');
        return response.data.data.$values; // Trả về danh sách phỏng vấn
    } catch (error) {
        console.error("Error fetching interviews:", error);
        throw error; // Hoặc xử lý lỗi như bạn cần
    }
};
//function get detail interview
export const fetchInterviewDetails = async (interviewId) => {
    try {
        const response = await api.get(`Interview/interviews/${interviewId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching interview details:", error);
        throw error; // Handle the error as needed
    }
};
//function update interview
export const updateInterview = async (interviewId, interviewData) => {
    const token = localStorage.getItem('token');

    try {
        const response = await api.put(`Interview/${interviewId}`, interviewData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error updating interview:", error);
        throw error; // Handle the error as needed
    }
};
//function update interview
export const deleteInterview = async (interviewId) => {
    const token = localStorage.getItem('token');

    try {
        const response = await api.delete(`Interview/interviews/${interviewId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error detele interview:", error);
        throw error; // Handle the error as needed
    }
};

export const uploadImage = async (interviewId, imageFile) => {
    const token = localStorage.getItem('token');
    
    const formData = new FormData();
    formData.append('imageFile', imageFile); // Thêm file vào formData

    try {
        const response = await api.post(`Interview/${interviewId}/upload-image`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data', // Thay đổi header cho phù hợp với việc tải lên file
            },
        });
        return response.data; // Trả về dữ liệu phản hồi từ server
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error; // Xử lý lỗi nếu cần
    }
};
// API Position
export const createPosition = async (interviewId, positionData) => {

    const token = localStorage.getItem('token');

    try {
        const response = await api.post(`Position/interviews/${interviewId}/positions`, positionData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error posting position:", error);
        throw error; // or handle error as needed
    }
};

// service/APIFunction.js
export const applyPosition = async (positionId, formData) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        throw new Error("Token không tồn tại.");
    }

    try {
        const response = await api.post(`Position/${positionId}/apply`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                // Không cần đặt Content-Type, Axios sẽ tự động xử lý
            },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error data:", error.response.data);
            console.error("Error status:", error.response.status);
        }
        console.error("Lỗi khi gửi đơn ứng tuyển:", error);
        throw error;
    }
};

export const checkApplicationStatus = async (positionId) => {
    try {
        const response = await api.get(`Position/positions/${positionId}/applications`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Nếu cần xác thực
            }
        });
        return response.data; // Trả về dữ liệu phản hồi
    } catch (error) {
        console.error("Lỗi khi kiểm tra trạng thái ứng tuyển:", error);
        throw error; // Ném lỗi để xử lý ở nơi gọi hàm
    }
};
