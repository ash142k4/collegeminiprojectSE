# WeedAI: Weed Detection & Analysis Dashboard

![WeedAI Logo](public/weedai-logo.png)

## Overview

Extract the given file form google drive : https://drive.google.com/file/d/1qKuXbkyZp-LSFvepaiOheJQyiqBfz-Uc/view?usp=drive_link

WeedAI is a modern web application for detecting and analyzing weeds in agricultural fields. It uses YOLO machine learning algorithms to process images, identify weed types, assess their maturity levels, and provide actionable insights for farmers and agricultural specialists.

## Features

- **Interactive Dashboard**: Visualize detection statistics, weed type distribution, and maturity levels
- **Image Upload System**: Upload field images for instant weed detection and analysis
- **Detection Details**: Detailed analysis of detected weeds with bounding boxes
- **Maturity Classification**: Automatic classification of weeds by maturity level (Seedling, Vegetative, Reproductive)
- **Treatment Recommendations**: Suggestions based on weed type and maturity
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Visualization**: ApexCharts, Custom SVG visualizations
- **UI Components**: Custom dark theme with interactive elements
- **Detection Algorithm**: YOLO (You Only Look Once) object detection algorithm

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weed-detection-dashboard.git
cd weed-detection-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
weed-detection-dashboard/
├── public/               # Static assets
├── src/                  # Source code
│   ├── app/              # Next.js app directory
│   │   ├── dashboard/    # Dashboard page
│   │   ├── upload/       # Upload functionality
│   │   ├── detection/    # Detection results
│   │   └── ...
│   ├── components/       # Reusable components
│   ├── services/         # API services
│   └── styles/           # Global styles
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Usage

1. **Dashboard**: View statistics and analytics about weed detections
2. **Upload**: Upload new field images for weed detection
3. **Detection**: View detailed results of previous detections
4. **Reports**: Generate and export reports (coming soon)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Developed as part of agricultural technology innovation
- Special thanks to contributors and testers

---

© 2023 WeedAI | All Rights Reserved
