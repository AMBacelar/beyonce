// Fetch retailers
const apibase = process.env.NEXT_PUBLIC_BACKEND_API || '';
export const fetchRetailers = async () => {
  try {
    const response = await fetch(`${apibase}/retailers/?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch retailers');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching retailers:', error);
    throw error;
  }
};

// Fetch user profiles
export const fetchUserProfiles = async () => {
  try {
    const response = await fetch(`${apibase}/userprofiles/?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch user profiles');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    throw error;
  }
};

// Fetch categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${apibase}/categories/?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Fetch extracted purchase informations
export const fetchExtractedPurchaseInformations = async () => {
  try {
    const response = await fetch(
      `${apibase}/extractedpurchaseinformations/?format=json`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch extracted purchase informations');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching extracted purchase informations:', error);
    throw error;
  }
};

// Fetch size recommendations
export const fetchSizeRecommendations = async () => {
  try {
    const response = await fetch(`${apibase}/sizerecommendations/?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch size recommendations');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching size recommendations:', error);
    throw error;
  }
};

// Fetch product compositions
export const fetchProductCompositions = async () => {
  try {
    const response = await fetch(`${apibase}/productcompositions/?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch product compositions');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product compositions:', error);
    throw error;
  }
};

// Fetch Style Guru personas
export const fetchStyleGuruPersonas = async () => {
  try {
    const response = await fetch(`${apibase}/stylegurupersonas/?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch Style Guru personas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Style Guru personas:', error);
    throw error;
  }
};
