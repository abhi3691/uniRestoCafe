import create from 'zustand';

const useIsLogedIn = create(set => ({
  isLogiedIn: false,
  setIsLogiedIn: status => set({isLogiedIn: status}),
}));

export default useIsLogedIn;
