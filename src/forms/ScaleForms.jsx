import React, { useState } from 'react';
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import {
  CssBaseline,
  Container,
  Paper,
  Typography,
  Divider,
  Box,
  Button
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function Scaleforms() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  // Steps
  const sections = [
    { key: 'endurancePurpose'  },
    { key: 'connectedClients'  },
    { key: 'goodsAndServices' },
    { key: 'ecosystem'},
    { key: 'scaleStrategy' },
    { key: 'financial' },
    { key: 'inspiredPeople' },
    { key: 'fundamentals' },

  ];

 
const customTheme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "20px",        
                 
          color: "#333",           
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "18px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "18px",
        },
      },
    },
  },
});


  // Schema
  const schema = {
    type: 'object',
    title: 'Scale Readiness Form',
    properties: {

      endurancePurpose: {
        type: 'object',
        title: 'Endurance Purpose',
        properties: {

          q1: {
            type: 'object',
            title:
              '1. You have clearly articulated and documented the magnitude of the BIG PROBLEM(s)',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              '2. You understand the root causes of the BIG PROBLEM your company solves',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              '3. Your vision & mission are well-understood across the organization',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q4: {
            type: 'object',
            title: '4. Solution Testing',
            description: 'Your solution has been well tested with outcome analysis',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        },
      },


      connectedClients: {
        type: 'object',
        title: 'Connected Clients',
        properties: {
          q1: {
            type: 'object',
            title:
              '1. You have clearly defined primary customer segment(s)',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              '2. You know which customer segments contribute the most to profitability',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              '3. You have targeted offerings and distribution for each segment',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q4: {
            type: 'object',
            title:
              '4. Your customer segments are stable or growing',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q5: {
            type: 'object',
            title: '5. You have proof of current & future demand',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q6: {
            type: 'object',
            title:
              '6. Macro trends support your future demand evidence',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q7: {
            type: 'object',
            title:
              '7. Macro factors substantiate future demand (duplicate OK)',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q8: {
            type: 'object',
            title:
              '8. You understand behavioral insights about key segments',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q9: {
            type: 'object',
            title:
              '9. You know what influences behavior changes in top segments',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q10: {
            type: 'object',
            title: '10. You predict and address customer issues effectively',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q11: {
            type: 'object',
            title: '11. You collect quantitative & qualitative customer feedback',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q12: {
            type: 'object',
            title:
              '12. You inspire engagement through compelling communication',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q13: {
            type: 'object',
            title:
              '13. You have strong emotional ties with customers (high retention)',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q14: {
            type: 'object',
            title:
              '14. You have repeatable means to engage and respond to users',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q15: {
            type: 'object',
            title:
              "15. You actively respond to customers' needs",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        },
      },


      goodsAndServices: {
        type: "object",
        title: "Innovative Goods and Services",
        properties: {
          q1: {
            type: 'object',
            title:
              '1. You have clearly defined primary customer segment(s)',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              '2. You offer a distinctive product and solution that is hard to duplicate or substitue',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              '3. Your offering, once users engage, is sticky.  Customers find it difficult or extremely inconvenient to switch',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q4: {
            type: 'object',
            title:
              '4. You occupy a distinct positioning relative to other market offerings.',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q5: {
            type: 'object',
            title:
              '5. Innovation is inherent in the culture of your venture.',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q6: {
            type: 'object',
            title:
              '6. You have a detailed multi-year new product pipeline plan',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q7: {
            type: 'object',
            title:
              "7. From the users' perspective, your solution is elegant at all points of the user journey",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        }
      },


      ecosystem: {
        type: "object",
        title: "Synergistic Ecosystem",
        properties: {
          q1: {
            type: 'object',
            title:
              "1. You have strategically engaged key partners to aid and ensure results,",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              "2. You have a pro-active process in place to manager and retain partner relationships",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              "3. You are agile and pivot-ready in response to the changing market conditions",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q4: {
            type: 'object',
            title:
              "4. You collaborate with suppliers as if they are partners, sharing benefits to ensure quality.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q5: {
            type: 'object',
            title:
              "5. You are knowledgable and have mapped the competitive landscape",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q6: {
            type: 'object',
            title:
              "6. You proactively act to protect your organization from the impact of competitors and challengers",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q7: {
            type: 'object',
            title:
              "7. You routinely turn competition into coopetition.  .",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q8: {
            type: 'object',
            title:
              "8. You study non-market conditions and articulate any warnings ",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        }
      },


      scaleStrategy: {
        type: 'object',
        title: 'Refined Scale Strategy',
        properties: {
          q1: {
            type: 'object',
            title:
              "1. Scale unit is unique and delivers distinctive value",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              "2. Operations are (re)-organized for optimal scaling",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              "3. Scale unit is adaptive to adress new contexts",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q4: {
            type: 'object',
            title:
              "4. Conditions and prerequisites for scale are clearly articulated",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q5: {
            type: 'object',
            title:
              "5. Your Scale pathway is defined and tested using external stakeholders",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q6: {
            type: 'object',
            title:
              "6. You actively respond to customers' needs",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q7: {
            type: 'object',
            title:
              "7. Your decision-making process is informed by reliable data",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q8: {
            type: 'object',
            title:
              "8. Your team consistently accomplishes strategic objectives on time and within budget",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q9: {
            type: 'object',
            title:
              "9. Your scale plan is in place, is sound, and is being followed",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        }
      },


      financial: {
        type: 'object',
        title: 'Financial Sustaninability',
        properties: {
          q1: {
            type: 'object',
            title:
              "1. Your scale unit model has reached break-even and financial performance is replicable",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              "2. Sources and targets for your new sales are identified and curated through a sales funnel ",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              "3. Sufficient funding lined up for operations, working capital and scale operations.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q4: {
            type: 'object',
            title:
              "4. You have pursued sources of capital, and strategies are already in place to raise capital",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q5: {
            type: 'object',
            title:
              "5. You have strong funder relationship including proof of funders' willingness.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q6: {
            type: 'object',
            title:
              "6. You can produce at least 2 years of independently audited financial statements, analyzed for key insights",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q7: {
            type: 'object',
            title:
              "7. You perform periodic budgeting and planning at different levels of the organization.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q8: {
            type: 'object',
            title:
              "8. Based on analysis, you know the volume where economies of scale kick-in",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q9: {
            type: 'object',
            title:
              "9. You track slaes and profitability by channel, region, segments, and products",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q10: {
            type: 'object',
            title:
              "10. You have varied, diversified, and predictable revenue streams",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q11: {
            type: 'object',
            title:
              "11. You have power to set pricing in your industry.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q12: {
            type: 'object',
            title:
              "12. You set pricing based on data collection and analysis",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q13: {
            type: 'object',
            title:
              "13. You have minimal working capital tied up in inventory",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q14: {
            type: 'object',
            title:
              "14. Your costs are predictable and minimized.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q15: {
            type: 'object',
            title:
              "15. You have clearly laid out internal controls in place to minimize loss or seepage.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        }
      },


      inspiredPeople: {
        type: 'object',
        title: "Inspired People",
        properties: {
          q1: {
            type: 'object',
            title:
              "1. You have capable, experienced leaders who demonstrate effective leadership and functional expertise.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              "2. Your leaders set the example for effectiveness, accountability and quality of engagement..",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              "3. You distribute leadership decision-making and accountability to individuals across the organization..",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q4: {
            type: 'object',
            title:
              "4.You have a process for analyzing and assessing organizational gaps and for recruiting local and remote talente.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q5: {
            type: 'object',
            title:
              "5. You have a written org chart, use written job descriptions, and a consistent & documented method for sourcing, interviewing, hiring talent. ",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q6: {
            type: 'object',
            title:
              "6. You have an agile process that allows your HR structure to evolve with growth.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q7: {
            type: 'object',
            title:
              "7. All major roles are filled with competent professionals aligned with the organizational mission and culture",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q8: {
            type: 'object',
            title:
              "8. There is a data driven performance management program in place.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q9: {
            type: 'object',
            title:
              "9. Your success scorecard is balanced and considers more than just financial metrics",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q10: {
            type: 'object',
            title:
              "10. We use clearly articulated, measurable objectives and targets in our performance management.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q11: {
            type: 'object',
            title:
              "11. Compensation and rewards for excellent work are tied to annual employee reviews..",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q12: {
            type: 'object',
            title:
              "12. Our culture is honed to drive competitive advantage, distinctiveness, agility and innovation",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q13: {
            type: 'object',
            title:
              "13. Our key organizational values are explicitly shared and formally reinforced through programming.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q14: {
            type: 'object',
            title:
              "14. We curate a culture of open communications where colleagues can communicate freely with and engage all other colleagues.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q15: {
            type: 'object',
            title:
              "15. Learning and development are incorporated in the culture.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        }
      },


      fundamentals: {
        type: 'object',
        title: ' Successful Ventures Fundamentals',
        properties: {
          q1: {
            type: 'object',
            title:
              "1. Based on data and analysis, our internal processes are efficient at creating value.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q2: {
            type: 'object',
            title:
              "2. Process outputs are consistently high quality, on schedule and not impacted by material, labor or equipment shortcomings.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },

          q3: {
            type: 'object',
            title:
              "3. We have smooth value chain flows, from reliable, connected , diverse sources.",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        }
      }
    },
  };




  // UI Schema
  const uiSchema = {
    endurancePurpose: {
      q1: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q2: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q3: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q4: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
    },
    connectedClients: Object.fromEntries(
      Array.from({ length: 15 }).map((_, i) => [
        `q${i + 1}`,
        { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } }
      ])
    ),
    goodsAndServices: Object.fromEntries(
      Array.from({ length: 15 }).map((_, i) => [
        `q${i + 1}`,
        { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } }
      ])
    ),
    ecosystem: Object.fromEntries(
      Array.from({ length: 15 }).map((_, i) => [
        `q${i + 1}`,
        { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } }
      ])
    ),
    scaleStrategy: Object.fromEntries(
      Array.from({ length: 15 }).map((_, i) => [
        `q${i + 1}`,
        { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } }
      ])
    ),
    financial: Object.fromEntries(
      Array.from({ length: 15 }).map((_, i) => [
        `q${i + 1}`,
        { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } }
      ])
    ),
    inspiredPeople: Object.fromEntries(
      Array.from({ length: 15 }).map((_, i) => [
        `q${i + 1}`,
        { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } }
      ])
    ),
    fundamentals: Object.fromEntries(
      Array.from({ length: 15 }).map((_, i) => [
        `q${i + 1}`,
        { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } }
      ])
    ),
  };

  // Handlers
  const handleNext = (data) => {
    setFormData({ ...formData, [sections[currentStep].key]: data.formData });
    setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    console.log('Final Data:', formData);
    alert('Submitted successfully!');
  };

  const step = sections[currentStep];

return (
  <ThemeProvider theme={customTheme}>
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, fontSize: 24 }}>
            Scale Readiness Form
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            {step.title}
          </Typography>

          <Form
  schema={{
    type: "object",
    properties: {
      [step.key]: schema.properties[step.key],
    },
  }}
  uiSchema={{ [step.key]: uiSchema[step.key] }}
  formData={{ [step.key]: formData[step.key] || {} }}
  validator={validator}
  onSubmit={(data) => {
    console.log("Schema:", JSON.stringify(schema));

    if (currentStep === sections.length - 1) {
      handleSubmit(data);
    } else {
      handleNext(data);
    }
  }}
>
  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
    {currentStep > 0 && (
      <Button variant="contained" color="secondary" onClick={handleBack}>
        Previous
      </Button>
    )}

    <Button variant="contained" color="primary" type="submit" sx={{ ml: "auto" }}>
      {currentStep === sections.length - 1 ? "Submit" : "Next"}
    </Button>
  </Box>
</Form>

</Paper>
</Container>
</>
</ThemeProvider>

  );
}