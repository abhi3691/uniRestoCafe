import create from 'zustand';

const useScrollData = create(set => ({
  scrolldata: [],
  setScrolldata: status => set({scrolldata: status}),
}));

export default useScrollData;
