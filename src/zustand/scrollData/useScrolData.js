import create from 'zustand';

const useScrolData = create(set => ({
  scrolldata: [],
  setScrolldata: status => set({scrolldata: status}),
}));

export default useScrolData;
