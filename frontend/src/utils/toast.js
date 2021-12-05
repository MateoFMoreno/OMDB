export const errorToast = (func, menssage) => {
    const id = "error-toast";
    if (!func.isActive(id)) {
        func({
            title: menssage,
            status: "error",
            duration: 3000,
            isClosable: true,
            id,
        });
    }
};

export const successToast = (func, menssage) => {
    const id = "success-toast";
    if(!func.isActive(id)){
        func({
            title: menssage,
            status: "success",
            duration: 2000,
            isClosable: true,
        })
    }
    
};
