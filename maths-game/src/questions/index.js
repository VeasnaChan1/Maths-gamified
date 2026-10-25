import year6Fractions from './year6-fractions.json';
import year6Decimals from './year6-decimals.json';
import year6Percentages from './year6-percentages.json';
import year6Ratio from './year6-ratio.json';
import year6AreaPerimeter from './year6-area-and-perimeter.json';
import year6OrderOperations from './year6-order-of-operations.json';

import year9Algebra from './year9-algebra.json';
import year9LinearGraphs from './year9-linear-graphs.json';
import year9Pythagoras from './year9-pythagoras.json';
import year9PercentagesRatio from './year9-percentages-and-ratio.json';
import year9Angles from './year9-angles.json';
import year9StandardForm from './year9-standard-form.json';
import year9Transformation from './year9-transformation.json';

export const CURRICULUM = {
  6: {
    year: 6,
    title: 'Year 6 — Key Stage 2',
    description: 'Master fractions, decimals, ratios, and area for primary to secondary transition.',
    topics: [
      {
        id: 'fractions',
        name: 'Fractions',
        shortDesc: 'Adding, equivalent fractions, and simplifying',
        symbol: '½',
        questions: year6Fractions,
      },
      {
        id: 'decimals',
        name: 'Decimals',
        shortDesc: 'Place value, rounding, and operations',
        symbol: '0.5',
        questions: year6Decimals,
      },
      {
        id: 'percentages',
        name: 'Percentages',
        shortDesc: 'Discounts, fractional equivalents, and parts',
        symbol: '%',
        questions: year6Percentages,
      },
      {
        id: 'ratio',
        name: 'Ratio',
        shortDesc: 'Simplifying ratios and sharing quantities',
        symbol: '1:2',
        questions: year6Ratio,
      },
      {
        id: 'area and perimeter',
        idSlug: 'area-and-perimeter',
        name: 'Area & Perimeter',
        shortDesc: 'Rectangles, squares, and triangles',
        symbol: '▭',
        questions: year6AreaPerimeter,
      },
      {
        id: 'order of operations',
        idSlug: 'order-of-operations',
        name: 'Order of Operations',
        shortDesc: 'BODMAS/BIDMAS brackets and powers',
        symbol: '( )',
        questions: year6OrderOperations,
      },
    ],
  },
  9: {
    year: 9,
    title: 'Year 9 — Key Stage 3 / GCSE Prep',
    description: 'Prepare for GCSE with algebra, coordinate graphs, Pythagoras, and geometry.',
    topics: [
      {
        id: 'algebra',
        name: 'Algebra',
        shortDesc: 'Expressions, expanding, factorising, and equations',
        symbol: '2x',
        questions: year9Algebra,
      },
      {
        id: 'linear graphs',
        idSlug: 'linear-graphs',
        name: 'Linear Graphs',
        shortDesc: 'Gradients, y-intercepts, and y = mx + c',
        symbol: 'y=mx',
        questions: year9LinearGraphs,
      },
      {
        id: 'Pythagoras',
        idSlug: 'pythagoras',
        name: "Pythagoras' Theorem",
        shortDesc: 'Right-angled triangles and hypotenuse calculations',
        symbol: '⊿',
        questions: year9Pythagoras,
      },
      {
        id: 'percentages and ratio',
        idSlug: 'percentages-and-ratio',
        name: 'Percentages & Ratio',
        shortDesc: 'Multipliers, compound change, and multi-part sharing',
        symbol: '×1.2',
        questions: year9PercentagesRatio,
      },
      {
        id: 'angles',
        name: 'Angles & Polygons',
        shortDesc: 'Angles on lines, triangles, and polygon interior sums',
        symbol: '∠',
        questions: year9Angles,
      },
      {
        id: 'standard form',
        idSlug: 'standard-form',
        name: 'Standard Form',
        shortDesc: 'Scientific notation and powers of 10',
        symbol: '10ⁿ',
        questions: year9StandardForm,
      },
      {
        id: 'transformation',
        name: 'Transformations',
        shortDesc: 'Translations, reflections, rotations, and enlargements',
        symbol: '⟳',
        questions: year9Transformation,
      },
    ],
  },
};

/**
 * Get question set filtered by year and topic.
 */
export function getQuestions(year, topicId) {
  const yearData = CURRICULUM[year];
  if (!yearData) return [];
  const topic = yearData.topics.find((t) => t.id === topicId || t.idSlug === topicId);
  return topic ? topic.questions : [];
}
