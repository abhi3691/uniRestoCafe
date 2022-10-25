import create from 'zustand';

const useLoginData = create(set => ({
  loginData: false,
  setLoginData: status => set({loginData: status}),
}));

export default useLoginData;
